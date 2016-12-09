// Stars
var RepoStarsList = React.createClass({
  getInitialState: function() {
    return {loading: true, error: null, data: null};
  },
  componentDidMount() {
    this.props.promise.then(value => this.setState({loading: false, data: value}), error => this.setState({loading: false, error: error}));
  },
  render: function() {
    if (this.state.loading) {
      return <span>Loading...</span>
    } else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    } else {
      var repos = this.state.data.items;
      var repoList = repos.map(function(repo) {
        return (
          <li>
            <a href={repo.html_url}>
              {repo.full_name}
              <small>
                ({repo.stargazers_count}
                stars, {repo.forks_count}
                forks)
              </small>
              <br/>
              <small>{repo.description}</small>
            </a>
          </li>
        );
      });
      return (
        <ol>{repoList}</ol>
      );
    }
  }
});
ReactDOM.render(
  <RepoStarsList promise={$.getJSON("https://api.github.com/search/repositories?q=javascript&sort=stars")}/>, document.getElementById("stars"));

// Forks
var RepoForksList = React.createClass({
  getInitialState: function() {
    return {loading: true, error: null, data: null};
  },
  componentDidMount() {
    this.props.promise.then(value => this.setState({loading: false, data: value}), error => this.setState({loading: false, error: error}));
  },
  render: function() {
    if (this.state.loading) {
      return <span></span>
    } else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    } else {
      var repos = this.state.data.items;
      var repoList = repos.map(function(repo) {
        return (
          <li>
            <a href={repo.html_url}>{repo.full_name}
              <small>({repo.forks_count}
                forks, {repo.stargazers_count}
                stars)</small>
              <br/>
              <small>{repo.description}</small>
            </a>
          </li>
        );
      });
      return (
        <ol>{repoList}</ol>
      );
    }
  }
});
ReactDOM.render(
  <RepoForksList promise={$.getJSON("https://api.github.com/search/repositories?q=javascript&sort=forks")}/>, document.getElementById("forks"));
