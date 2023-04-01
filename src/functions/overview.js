function importAll(r) {
  return r.keys().map(r);
}

const projectOne =importAll(require.context('../gallery/project1', false, /\.(png|jpe?g|svg)$/));
const projectTwo = importAll(require.context('../gallery/project2', false, /\.(png|jpe?g|svg)$/));
const projectThree = importAll(require.context('../gallery/project3', false, /\.(png|jpe?g|svg)$/));
const projectFour = importAll(require.context('../gallery/project6', false, /\.(png|jpe?g|svg)$/));
const projectFive = importAll(require.context('../gallery/project7', false, /\.(png|jpe?g|svg)$/));
const projectSix = importAll(require.context('../gallery/project9', false, /\.(png|jpe?g|svg)$/));

export const Images = [projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix]