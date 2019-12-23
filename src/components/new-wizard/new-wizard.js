import React from "react";
import {withRouter} from 'react-router-dom'

class StartWizard extends React.Component{
    startWizard =() => {
        localStorage.clear();
        const {history} = this.props;
        history.push('wizard-personal');
    };
    render() {
        return (
            <div className={'page'}>
                <button onClick={this.startWizard}>start</button>
            </div>
        );
    }

}

export default withRouter(StartWizard);