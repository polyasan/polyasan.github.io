function Old() {
  return (
    <div className="App">
      <img
        src={process.env.PUBLIC_URL + "profile.png"}
        width={"200px"}
        alt="profile"
        style={{
          display: "block",
          position: "fixed",
          right: "50px",
          top: "80px",
        }}
      />
      <div className="w3-container w3-indigo">
        <h2>Curriculum vitea</h2>
      </div>
      {cvData.map((item) => {
        return (
          <div>
            <div className="w3-row">
              <div className="w3-third w3-container">
                <h3 className="r">{item.title}</h3>
              </div>
            </div>
            {item.blocks.map((blockItem) => {
              return <Block block={blockItem} />;
            })}
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
