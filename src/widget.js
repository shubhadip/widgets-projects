
import './assets/css/app-main.css';
import { createApp } from 'vue'

function paytmLoadWidget(widgetCode, containerId, props = {useRouter: false}) {
  const widget = import( /* webpackChunkName: "[index]" */`./widgets/${widgetCode}.paytmwidget.vue`)
  if (widget) {
    const node = document.getElementById(containerId);
    if (node) {
    widget.then((Component) => {
        const renderDOM = () => {
          const app = createApp(Component.default)
          if(props.useRouter){
            import('./router.js')
              .then((mod) => {
                app.use(mod.default);
                app.mount(`#${containerId}`)
              })
          }else{
            app.mount(`#${containerId}`)  
          }
          
        }
        renderDOM();
      })
    }
  }
}

window['paytmLoadWidget'] = paytmLoadWidget