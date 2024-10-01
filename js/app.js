const shareBtn = document.querySelector('#shareBtn')

const tooltipContent = `
  <div class="tooltip">
    <span class="tooltip__title">Share</span>
    <ul class="tooltip__list">
      <li class="tooltip__item">
        <a href="#" class="tooltip__link">
          <img src="images/icon-facebook.svg">
        </a>
      </li>
      <li class="tooltip__item">
        <a href="#" class="tooltip__link">
          <img src="images/icon-twitter.svg">
        </a>
      </li>
      <li class="tooltip__item">
        <a href="#" class="tooltip__link">
          <img src="images/icon-pinterest.svg">
        </a>
      </li>
    </ul>
  </div>
`

tippy(shareBtn, {
	content: tooltipContent,
	animation: 'scale',
	trigger: 'click',
  allowHTML: true,
  interactive: true,
  theme: 'dark-blue'
})
