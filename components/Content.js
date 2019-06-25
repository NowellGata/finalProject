import * as pages from './pages';

export default (state) => {

    return `
  ${pages[state.pageContent](state)}
`;
};

// export default (state) => `
//   <div id="bg-container">
//     ${pages[state.pageContent](state)}
//   </div>`;