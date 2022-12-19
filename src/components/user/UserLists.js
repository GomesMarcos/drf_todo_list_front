import React from "react";
import ListComponent from "../list/ListComponent";

export default class UserLists extends React.Component {

    state = { lists: [], loading: true };

    async componentDidMount() {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        config.headers["Authorization"] = "Token " + localStorage.getItem("token");

        let url = "http://127.0.0.1:8000/lists/"
        const response = await fetch(url, config)
        const data = await response.json()
        console.log(data);
        this.setState({ lists: data, loading: false });
    }

    render() {
        const listsApi = this.state.lists;
        if (listsApi.length > 0) {
            return (
                <div>
                    {listsApi.map(list => <ListComponent key={list.id} items={list.item_set} listName={list.name} />)}
                </div>
            )
        }

        return (
            <span>No List yet</span>
        )
    }
}