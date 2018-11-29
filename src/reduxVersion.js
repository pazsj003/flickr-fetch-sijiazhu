import * as constants from "./constants";
import * as actions from "./action"
import React, {Component} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import ReactVersion from "./reactVersion";

class ReduxVersion extends Component{

    renderImage(option, index){

        return (

            <div key={index}
                 className="col-lg-3">

                <div className="card">

                    <div className="card-body">

                        <img  className="card-img-top" src={option.media.m} alt="Card image cap"/>
                    </div>
                </div>
            </div>
        )

    }

    render() {
        let inputElem
    console.log("render");
        return (
            <div>
                <div>

                    <p>Search By Tag </p>

                    <ul className="nav nav-tabs ">

                        <li >

                            <input onChange={()=>this.props.TextChanged(inputElem.value)}
                                   className="form-control "
                                   id="titleFld"
                                   ref={node => inputElem = node}
                                   placeholder="Dog"/>
                        </li>
                        <li >
                            <button onClick={()=>this.props.TagSearch(this.props.text)}
                                    className="btn btn-outline-success my-2 my-sm-0">Search

                            </button>

                        </li>

                    </ul>

                </div>

                <div className="row">

                    {this.props.items.map((item, key) => {
                        return (this.renderImage(item,key)
                        )
                    })
                    }

                </div>

            </div>

        )
    }

}


const stateToPropsMapper =(state) =>({

    items:state.items,
    text:state.text
})


const dispatcherToPropsMapper = (dispatch) =>({
        TextChanged:(text)=>actions.TextChanged(dispatch,text),
        TagSearch:(tag)=>actions.TagSearch(dispatch,tag)


    }

)

export default  connect(stateToPropsMapper,dispatcherToPropsMapper)(ReduxVersion);

