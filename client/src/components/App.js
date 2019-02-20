import React, { Component } from 'react';

class App extends Component {
  state = {
    stories: [],
    category: '',
    categories : {
      topStories : '/topstories',
      business : '/business',
      technology : '/technology',
      science : '/science',
      entertainment : '/entertainment',
      health : '/health',
      sports : '/sports'
    }
  };

  componentDidMount() {
    fetch(`${document.location.origin}/topstories`)
      .then(response => response.json())
      .then(json => this.setState({ stories: json.articles }))
      .catch(error => alert(error.message));
  }

  fetchCategory = () => {
    fetch(`${document.location.origin}${this.state.category}`)
      .then(response => response.json())
      .then(json => this.setState({ stories: json.articles }))
      .catch(error => alert(error.message));
  }

  updateCategory = test => {
    this.setState({ category: test }, () => {
      this.fetchCategory();
    });
  }


  render() {
    return (
      <div>
        <h1 id="title">The McManus Report.</h1>
        <br />
        <button onClick={() => this.updateCategory(this.state.categories.business)}>Business</button>
        <button onClick={() => this.updateCategory(this.state.categories.technology)}>Technology</button>
        <button onClick={() => this.updateCategory(this.state.categories.science)}>Science</button>
        <button id="topstories" onClick={() => this.updateCategory(this.state.categories.business)}>Top Stories</button>
        <button onClick={() => this.updateCategory(this.state.categories.entertainment)}>Entertainment</button>
        <button onClick={() => this.updateCategory(this.state.categories.health)}>Health</button>
        <button onClick={() => this.updateCategory(this.state.categories.sports)}>Sports</button>
        <div className="article-wrapper">
        {
          this.state.stories.map(item => {
            const { id, author, source, title, url, publishedAt, description, urlToImage } = item;
            if (!urlToImage) {
              return null;
            }
            return (
              <div key={id} className="article">
                <a href={url}>
                  <img src={urlToImage} alt="article-image" className="article-image"/>
                  <h3 style={{ margin: 5 }}>{title}</h3>
                </a>
                <p style={{ margin: 5 }}>{description}</p>
                <div className="article-footer">
                  <h4>{source.name}</h4>
                  <em>{new Date(publishedAt).toLocaleTimeString()}</em>
                </div>
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
