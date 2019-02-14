import React, { Component } from 'react';

class App extends Component {
  state = { stories: [] };

  componentDidMount() {
    fetch(`${document.location.origin}/topstories`)
      .then(response => response.json())
      .then(json => this.setState({ stories: json.articles }))
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
        <h2>McManus Report</h2>
        <div className="article-wrapper">
        {
          this.state.stories.map(item => {
            const { id, author, source, title, url, publishedAt, description, urlToImage } = item;
            if (!urlToImage) {
              return null;
            }
            return (
              <div key={id} style={{width: 300, margin: 50}}>
                <img src={urlToImage} alt="article-image" style={{maxWidth: 200}}/>
                <a href={url}><h3>{title}</h3></a>
                <p>{description}</p>
                <h4>{source.name}</h4>
                <em>{new Date(publishedAt).toLocaleTimeString()}</em>
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
