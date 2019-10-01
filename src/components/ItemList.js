import React from "react";
import "../App.css";
import Item from "./item";
import Modal from "./modal";
import { post, getById, get } from "../api";

class ItemList extends React.Component {
  state = { list: [], isOpen: false, value: "", submitting: true };

  constructor(...args) {
    super(...args);
    this.add = this.add.bind(this);
  }
  componentDidMount() {
    get().then(list => {
      this.setState({ list, submitting: false });
    });
  }
  onChange = event => {
    this.setState({ value: event.target.value });
  };
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  async add() {
    const { value } = { ...this.state };

    if (value) {
      const data = await post(value);
      this.setState({ list: data, value: "" });
      this.toggleModal();
    }
  }

  onRemove = async id => {
    const list = await getById(id);
    this.setState({ list });
  };

  render() {
    const { list, submitting } = this.state;
    return (
      <div>
        <div className="App">
          <h1>Supermarket List</h1>
          {submitting ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>{list.length ? `${list.length} Items` : null}</p>
              {list.length ? (
                list.map(item => (
                  <Item key={item.id} item={item} onRemove={this.onRemove} />
                ))
              ) : (
                <p> List is empty</p>
              )}
            </>
          )}
        </div>

        <button
          style={{
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            color: "white",
            backgroundColor: "#1ea9fa",
            padding: "15px",
            borderRadius: "4px",
            textAlign: "center",
            border: "1px solid #1686c7",
            fontSize: "18px",
            justifyContent: "center"
          }}
          id="btn"
          className="btn"
          onClick={this.toggleModal}
        >
          Add item
        </button>
        <Modal
          show={this.state.isOpen}
          onClose={this.toggleModal}
          closeable={false}
        >
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px"
              }}
              htmlFor="inputDescription"
            >
              Add Item
            </label>
            <input
              type="text"
              id="inputDescription"
              value={this.state.value}
              onChange={this.onChange}
              style={{
                width: "97%",
                marginTop: "10px",
                padding: "15px 0px 15px 3%",
                borderRadius: "4px",
                border: "1px solid #ddd"
              }}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <button className="btn" onClick={this.toggleModal}>
              Cancel
            </button>
            <button id="btnAdd" className="btn btn-add" onClick={this.add}>
              Add
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ItemList;
