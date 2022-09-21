export default class ColumnChart {
  locale = 'en-US'
  loadingClassName = 'column-chart_loading'
  chartHeight = 50

  constructor(props) {
    this.data = props?.data
    this.label = props?.label
    this.value = props?.value
    this.link = props?.link
    this.formatHeading = props?.formatHeading
    this.render()
  }

  render() {
    this.template()
    this.renderChartBody()
  }

  update(newData) {
    this.data = newData
    this.renderChartBody()
  }

  destroy() {

  }

  remove() {
    this.element.remove()
  }

  heading() {
    if (!this.value) return
    let headingLocale = this.value.toLocaleString(this.locale)
    if (this.formatHeading) {
      headingLocale = this.formatHeading(headingLocale)
    }
    return headingLocale
  }

  // >>>>> Templates <<<<<
  template() {
    let linkTmpl = this.link
      ? `<a href="${this.link}" class="column-chart__link">View all</a>`
      : '';

    let container = this.createElement(`
      <div class="column-chart ${this.loadingClassName}" style="--chart-height: ${this.chartHeight}">
        <div class="column-chart__title">
          Total ${this.label}
          ${linkTmpl}
        </div>
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">
            ${this.heading()}
          </div>
          <div data-element="body" class="column-chart__chart">
            <!-- ... -->
          </div>
        </div>
      </div>
    `)
    this.element = container
  }

  // >>>>> Chart <<<<<
  renderChartBody() {
    this.element.classList.add(this.loadingClassName)
    let chartBody = this.element.querySelector('[data-element="body"]')
    if (this.data?.length) {
      this.element.classList.remove(this.loadingClassName)
      chartBody.innerHTML = this.getChartItems()
    }
  }

  getChartItems() {
    let items = ''
    let max = this.getMaxOfArray(this.data)
    this.data.forEach((value) => {
      let variable = Math.floor((this.chartHeight / max) * value)
      let percent = Math.round((100 / max) * value)
      items += `<div style="--value: ${variable}" data-tooltip="${percent}%"></div>`
    })
    return items
  }

  // >>>>> Helpers <<<<<
  createElement(html) {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.firstElementChild
  }

  getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray)
  }
}
