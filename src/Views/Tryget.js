import React from 'react';

export default class Tryget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      files: [],
      folders: []
    };
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/http://e70af9f4.ngrok.io/get_mydrive?emailID=admin")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            files: result.files,
            folders: result.folders
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, files, folders } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {folders.map(item => (
            <div key={item.folders}>
              <h1>{item.folderpath}</h1>
              {item.foldername}

            </div>
          ))}
          </div>
      );
    }
  }
}