import Proptypes from 'prop-types';
import SectiolStl from './Section.module.css';

function Section({ title, children }) {
  return (
    <section>
      <h2 className={SectiolStl.heading}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
};

export default Section;
