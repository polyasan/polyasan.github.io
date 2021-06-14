import "./App.css"

function Block(props) {
  return (
    <div class="w3-row">
      <div class="w3-third w3-container">
        <p class="r">
          {props.block.map((blockTitle) => {
            return (
              <div>
                {blockTitle.label}
                <br />
              </div>
            );
          })}
        </p>
      </div>
      <div class="w3-third w3-container">
        <p class="l">
          {props.block.map((blockTitle) => {
            if (Array.isArray(blockTitle.value)) {
              return (
                <div>
                  {blockTitle.value.map((valueItem) => {
                    return (
                      <div>
                        {valueItem}
                        <br />
                      </div>
                    );
                  })}
                  <br />
                </div>
              );
            } else {
              return (
                <div>
                  {blockTitle.value}
                  <br />
                </div>
              );
            }
          })}
        </p>
      </div>
    </div>
  );
}

export default Block;
