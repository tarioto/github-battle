const USER_DATA = {
  name: 'Tim Arioto',
  username: 'tarioto',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}

const React = require('react');
const ReactDOM = require('react-dom');

const ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
})

const ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
        {this.props.username}
        </a>
      </div>
    )
  }
})

const ProfileName = React.createClass({
  render: function () {
    return (
      <div> {this.props.name} </div>
    )
  }
})

const Avatar = React. createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Avatar user={USER_DATA}/>,
  document.getElementById('app')
);
