import React from 'react';

const asideHoc = (WrappedComponent) => {
  class aside_hoc extends React.Component {
    render() {
      return (
        <aside className="App__aside -sub">
          <WrappedComponent {...this.props} />
        </aside>
      );
    }
  }

  return aside_hoc;
};

export default asideHoc;
