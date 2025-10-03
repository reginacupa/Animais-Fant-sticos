export default function inittooltip() {

  const tooltip = document.querySelectorAll('[data-tooltip]');

  tooltip.forEach((item) => {
    item.addEventListener('mouseover', onmouseover);
  });

  function onmouseover(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = event.pageY + 'px';
    tooltipBox.style.left = event.pageX + 'px';

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);

  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeElementListener('mouseleave', onMouseLeave);
      this.element.removeElementListener('mousemove', onMouseMove);
    }
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  };

  function criarTooltipBox(element){
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;

  }
}


