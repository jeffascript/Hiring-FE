import React, { Component } from "react";

class Accordian extends Component {
  state = {
    opened: false,
  };

  render() {
    const data = [
      
        "How much does it cost lorem ipsum?",
      
      
      "lorem ipsum dolor sit amet, consectetur adipisci?",
      
      
      "Tempor incidunt ut labore et dolore?",
      
    ];

    const opened = this.state.opened;

    return (
      <div
        {...{
          className: `accordion-item, ${opened && "accordion-item--opened"}`,
          onClick: () => {
            this.setState({ opened: !opened });
          },
        }}
      >
        <div {...{ className: "wrapper" }}>
          <ul {...{ className: "accordion-list" }}>
            {data.map((title) => {
              return (
                <li {...{ className: "accordion-list__item" }}>
                  <div {...{ className: "accordion-item__line" }}>
                  <span {...{ className: "accordion-item__icon" }} />
                    <h3 {...{ className: "accordion-item__title" }}>{title} </h3>
                  
                  </div>
                  <div {...{ className: "accordion-item__inner" }}>
                    <div {...{ className: "accordion-item__content" }}>
                      <p {...{ className: "accordion-item__paragraph" }}>
                        'Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Eveniet natus sint provident vel ab reprehenderit
                        cum soluta, suscipit facere nisi sed earum repellendus
                        fuga debitis, nam molestiae minima voluptates possimus.'
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Accordian;
