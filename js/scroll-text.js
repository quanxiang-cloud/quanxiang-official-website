; (function (global) {
  "use strict"
  let textRollMasks =  document.querySelectorAll('*[text-roll-mask]');
  let textRollInterval;
  let rollMaskMaxWidth;
  let rollMaskMaxHeight;


  function rollingText() {
    textRollMasks = document.querySelectorAll('*[text-roll-mask]');

    textRollInterval = setInterval(textRollTransfer, 2000);

    [...textRollMasks].forEach((rollMask) => {
      if (!rollMask.children.length) return;
      [...rollMask.children].forEach((child) => {
        child.style.cssText = `
          display: block;
      `;
      })

      rollMaskMaxWidth = getMaxLength([...rollMask.children].map((child) => child.offsetWidth))
      rollMaskMaxHeight = getMaxLength([...rollMask.children].map((child) => child.offsetHeight))

      rollMask.style.cssText = `
        width: ${rollMaskMaxWidth}px;
        height: ${rollMaskMaxHeight}px;
        position: relative;
        overflow: hidden;
      `;

      [...rollMask.children].forEach((child) => {
        child.style.cssText += `
          box-sizing: border-box;
          position: absolute;
          white-space: nowrap;
          top: -${rollMaskMaxHeight}px;
      `;
      })

      let show = rollMask.querySelector('*[data-show]')
      if (!show) {
        show = rollMask.children[0];
        show.setAttribute('data-show', '')
      }
    })
  }



  function textRollTransfer() {
    if (!textRollMasks.length) return;
    [...textRollMasks].forEach((rollMask) => {
      const show = rollMask.querySelector('*[data-show]')
      const next = show.nextElementSibling || rollMask.querySelector('*:first-child');
      const up = rollMask.querySelector('*[data-up]');
      if (up) {
        up.removeAttribute('data-up');
      }

      show.removeAttribute('data-show');
      show.setAttribute('data-up', '');
      next.setAttribute('data-show', '')
    })
  }

  function getMaxLength(numberArray) {
    return Math.max(...numberArray)
  }

  function debounce(fn, wait) {
    var timer = null;
    return function () {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(fn, wait);
    }
  }


  function rollText() {
    [...textRollMasks].forEach((rollMask) => { 
      rollMask.style.cssText = ''
    })
    clearInterval(textRollInterval)
    textRollInterval = null
    rollingText()
  }

  window.addEventListener("resize", debounce(rollText, 300));

  rollText()

})(window)

