import Home from './presenter';
import { shallow } from 'enzyme';

describe('Home', () => {
  const props = {
    tracks: [{ title: 'x' }, { title: 'y' }],
  };

  it('shows two elements', () => {
    const element = shallow(<Home {...props} />);
    expect(element.find('.track')).to.have.length(2);
  });
});
