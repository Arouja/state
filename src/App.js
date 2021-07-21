import React from "react";
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Arij Hammami',
        bio: "I am Versatile, autonomous, motivated, high communication skills, teamwork, dynamic, strength of proposal, interpersonal skills, initiative, great analysis and technical design.",
      
        profession: 'Full Stack JavaScript Developer'
      },
      bool: false,
      counter: 0
    };
  }

  handleClick = () => this.state.bool ? this.setState({ bool: false }) : this.setState({ bool: true });

  incrementCounter = () => {
    const { counter } = this.state;
    this.state.bool ?
      this.setState({ counter: counter + 1 }) : this.setState({ counter: 0 });
  };

  componentDidMount = () => {
    setInterval(this.incrementCounter, 1000);
  }


  render() {
    return (
      <>
        <div style={{ display: 'flex', margin: 30, justifyContent: 'spaceBetween', alignItems: 'center' }}>
          {/**********  Display button ************/}
          <button style={{
            background: 'rgb(67 14 195)', border: 'none',
            color: 'white', padding: 15, fontSize: 20,
            textAlign: 'center', borderRadius: 5,
            cursor: 'pointer', width: 150, height: 50
          }} onClick={this.handleClick} >{this.state.bool ? "Mask" : "Display"}</button>
          {/*************  Counter *****************/}
          <h2 style={{ color: '#3f51b5', paddingLeft: 30 }}>{this.state.counter} seconds have passed since editing .</h2>
        </div>
        {this.state.bool && (

          <div style={{
            display: 'flex', width: 900, justifyContent: 'center', margin: 'auto',
            padding: 20, borderRadius: 10
          }}>
            {/*************  Countent *****************/}
            <img style={{ width: 600, height: 500 }} src="/arij.jpg" />
            <div style={{ margin: 50 }}>
              <h2 style={{
                fontFamily: "Times New Roman", fontSize: 50, color: "darkblue"
              }}>
                {this.state.Person.fullName}
              </h2>
              <h3 style={{
                fontFamily: "Times New Roman", fontSize: 20, fontStyle: "oblique", color: 'darkgrey'
              }}>
                {this.state.Person.bio || 'Welcome to my profile'}
              </h3>
              <h4 style={{
                fontStyle: "Times New Roman", fontSize: 30, color: "darkblue"
              }}>
                {this.state.Person.profession}
              </h4>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default App;