
function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function initLunr() {
  if (!endsWith(baseurl, "/")) {
    baseurl = baseurl + '/'
  };

  let lunrIndex, pagesIndex;

  lunr.zh = function () {
    this.pipeline.reset();
    this.pipeline.add(lunr.zh.trimmer, lunr.stopWordFilter, lunr.stemmer);
  };

  lunr.zh.trimmer = function (token) {
    return token.update(str => {
      if (/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(str)) return str;
      return str.replace(/^\W+/, "").replace(/\W+$/, "");
    });
  };

  lunr.Pipeline.registerFunction(lunr.zh.trimmer, "trimmer-zh");

  // First retrieve the index file
  $.getJSON(baseurl + "index.json")
    .done(function (index) {
      pagesIndex = index;
      // Set up lunrjs by declaring the fields we use
      // Also provide their boost level for the ranking
      lunrIndex = lunr(function () {
        this.use(lunr.zh);

        this.ref("uri");
        this.field('title', {
          boost: 15
        });
        this.field('description', {
          boost: 10
        });
        this.field("content", {
          boost: 5
        });

        pagesIndex.forEach(function (doc) {
          this.add(doc)
        }, this)
      })

      const autoCompleteJS = new autoComplete({
        data: {
          src: async () => {
            try {
              // Loading placeholder text
              document
                .getElementById("autoComplete")
                .setAttribute("placeholder", "Loading...");
              // Fetch External Data Source
              const data = await pagesIndex;
              // Post Loading placeholder text
              document
                .getElementById("autoComplete")
                .setAttribute("placeholder", autoCompleteJS.placeHolder);
              // Returns Fetched data
              return data;
            } catch (error) {
              return error;
            }
          },
          keys: ["title", "description", "content"],
          cache: true,
          filter: (list) => {
            const filteredResults = Array.from(
              new Set(list.map((value) => {
                return value.value.uri
              }))
            ).map((url) => {
              return list.find((item) => item.value.uri === url)
            })

            return filteredResults;
          }
        },
        trigger: (query) => {
          return query.replace(/ /g, "").length >= 2; // Returns "Boolean"
        },
        wrapper: false,
        diacritics: true,
        placeHolder: "请输入关键词",
        resultsList: {
          element: (list, data) => {
            console.log(data);
            const info = document.createElement("div");
            info.setAttribute('class', 'search-result-info')

            if (!data.results.length) {
              info.innerHTML = `没有搜索到关于 “<strong>${data.query}</strong>” 的文档`;
            } else {
              info.innerHTML = `在以下 <strong>${data.matches.length}</strong> 篇文档内容中搜索到“${data.query}”`;
            }
            list.prepend(info);
          },
          noResults: true,
          maxResults: 100,
          tabSelect: true,
          highlight: true,
        },
        resultItem: {
          element: (item, data) => {
            // Modify Results Item Style
            item.setAttribute('class', 'search-result-item');
            // Modify Results Item Content
            item.innerHTML = `
            <span class="result-item-title">
              ${data.key === 'title' ? data.match : data.value.title}
            </span>
            <span class="result-item-description">
              ${data.key === 'description' ? data.match : data.value.description}
            </span>`;
          },
          highlight: true
        },
        events: {
          input: {
            focus: () => {
              if (autoCompleteJS.input.value.length) autoCompleteJS.start();
            }
          }
        }
      });

      autoCompleteJS.input.addEventListener("selection", function (event) {
        const feedback = event.detail;
        autoCompleteJS.input.blur();
        const { uri, title } = feedback.selection.value;
        window.open(uri, '_blank')
        autoCompleteJS.input.value = title;
      });

    }).fail(function (_, textStatus, error) {
      let err = textStatus + ", " + error;
      console.error("Error getting Hugo index file:", err);
    });
}

initLunr();
