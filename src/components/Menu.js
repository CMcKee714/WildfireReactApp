import React, { Component } from 'react';
import { MENU } from '../shared/menu';

class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            menu: MENU
        }
    }
    // RenderMenuItem({menuItem}) {
    //     return (

    //     );
    // }

    render() {
        const menuItems = this.state.menu.map(menuItem => {
            return(
                <div key={menuItem.id} className="col-md-4 mt-3">
                    <div className="card">
                        <img className="card-img-top" src={menuItem.image} alt={menuItem.name} />
                        <div className="card-body">
                            <div className="card-title">{menuItem.name}
                                <p className="card-text text-right">{menuItem.price}</p>
                            </div>
                            <button className="btn btn-sm cateringBtn">Add to Order</button>
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <div className="container">
                <h2 className="my-3 menuHeader">Fresh Food, Daily</h2>
                <div className="row">
                    {menuItems}
                </div>
            </div>
        );
    }
}
    
export default Menu;