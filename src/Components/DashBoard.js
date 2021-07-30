import React from "react";

class DashBoard extends React.Component {
  state = {
    batteryData: [0, 0, 0, 0],
  };

  componentDidMount() {
    this.dataApi();
  }
  dataApi = () => {
    setInterval(() => {
      var number = Math.random(0, 100).toFixed(3);
      this.setState({
        batteryData: [number, number, number, number],
      });
    }, 2000);
  };
  render() {
    const { batteryData } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            backgroundColor: "#84e09d",
            color: "white",
            width: "30%",
            borderRadius: 10,
            elevation: 1,
          }}
        >
          <h1
            style={{
              marginLeft: "10px",
              fontWeight: "bold",
              fontFamily: "Candara",
              fontStyle: "italic",
              fontSize: "25px",
            }}
          >
            DashBoard
          </h1>
          <h2
            style={{
              marginLeft: "10px",
              fontWeight: "bold",
              fontFamily: "Candara",
              fontStyle: "italic",
              fontSize: "20px",
            }}
          >
            bms
          </h2>
          <h2
            style={{
              marginLeft: "10px",
              fontWeight: "bold",
              fontFamily: "Candara",
              fontStyle: "italic",
              fontSize: "20px",
              paddingRight: "10px",
            }}
            onClick={() => this.props.onLogout()}
          >
            logout
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingLeft: 10,
            width: "70%",
            backgroundColor: "#cccccc",
            borderRadius: 10,
            elevation: 1,
            color:'white'
          }}
        >
          <h1>Battery Voltages</h1>
          {batteryData.map((data, index) => (
            <div key={index} style={{ margin: 10 }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "Candara",
                  fontStyle: "italic",
                }}
              >{`voltage v${index + 1}`}</p>
              <p
                style={{
                  margin: 10,
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Candara",
                  fontStyle: "italic",
                }}
              >
                {data}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DashBoard;
