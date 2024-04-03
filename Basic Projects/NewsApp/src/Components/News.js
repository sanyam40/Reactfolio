import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2023-07-08&to=2023-07-08&sortBy=popularity&apiKey=a4a76a87e1844d93a377c6e792e8a1f2&page=" +
      this.state.page +
      "&pageSize=5";
    let data = await fetch(url);
    if (!data.status === 200) {
      throw Error(data.status);
    }
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      loding: false,
      totalResults: parsedData.totalResults,
    });
  }

  nextPage = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  PrevPage = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2023-07-08&to=2023-07-08&sortBy=popularity&apiKey=a4a76a87e1844d93a377c6e792e8a1f2";
    let data = await fetch(url);
    if (!data.status === 200) {
      throw Error(data.status);
    }
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  fetchMorData = async () => {
    this.props.setProgress(10);
    this.setState({ page: this.state.page + 1 });
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2023-07-08&to=2023-07-08&sortBy=popularity&apiKey=a4a76a87e1844d93a377c6e792e8a1f2&page=" +
      this.state.page +
      "&pageSize=5";
    let data = await fetch(url);
    if (!data.status === 200) {
      throw Error(data.status);
    }
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loding: false,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News - Top Headlines</h2>
        {/* code for infinte scroll */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMorData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={element.description.slice(0, 88)}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
