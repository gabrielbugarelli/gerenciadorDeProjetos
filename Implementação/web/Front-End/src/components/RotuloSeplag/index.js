import gridCss  from '../../utilities/Grid.js';
import './style.css'

const RotuloSeplag = (props)  => {    
    
    function colClasseCss() {
        // Carrega a Grid Css
        let classeCss = gridCss(props.cols ? props.cols : '12')
        // Retorna as classes CSS customizadas    
        return classeCss
    }

    return (
        <div className={colClasseCss()}>
            <div className={props.horizontal? 'content-rotulo rotulo-horizontal' : 'content-rotulo rotulo-vertical'}>
                <div className="label-rotulo p-col-fixed label-destaque">
                    <label >{ props.nome }</label>
                </div>
                <div className="p-col elemento">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default RotuloSeplag;