import React, {Component} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import fetchJsonp from 'fetch-jsonp';

class ReactVersion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: {title: ''},

            items:[],



        };


        this.titleChanged=this.titleChanged.bind(this);
        this.SearchImage=this.SearchImage.bind(this);
        this.renderImage=this.renderImage.bind(this);

    }

    componentDidMount() {
        // this.SearchImage();
    }


    titleChanged(event) {


        this.setState({
            images: {title: event.target.value}
        });
        console.log(this.state.images);

    }


    SearchImage(){

        var endpoint =
            'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=';

        let tag= this.state.images.title;
        var search = endpoint + tag;

        const result = fetchJsonp(search, {
            jsonpCallback: 'jsoncallback',
            timeout: 3000
        });

        result
            .then(response => response.json())
            .then(json => {
                this.setState({items:json.items});

            })
            .catch(function(err) {
                console.log(err);
            });

    }

    renderImage(option, index){

                return (

                    <div key={index}
                         class="col-lg-3">

                    <div className="card">

                        <div className="card-body">

                    <img  className="card-img-top" src={option.media.m} alt="Card image cap"/>
                        </div>
                    </div>
                    </div>
                )

        }





    render() {

        return (
            <div>
            <div>

                    <p>Search By Tag </p>

            <ul className="nav nav-tabs ">

                <li >

                <input onChange={this.titleChanged}
                       className="form-control "
                       id="titleFld"

                       placeholder="Dog"/>
                </li>
                <li >
                <button onClick={this.SearchImage}
                        className="btn btn-outline-success my-2 my-sm-0">Search

                </button>

                </li>

            </ul>




            </div>


            <div className="row">

                {this.state.items.map((item, key) => {
                    return (this.renderImage(item,key)
                    )
                })
                }


             </div>


       </div>

        )

    }
}

export default ReactVersion;
