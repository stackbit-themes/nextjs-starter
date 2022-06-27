import { HeroSection } from './HeroSection';
import { CardGridSection } from './CardGridSection';

const componentsMap = {
  HeroSection: HeroSection,
  CardGridSection: CardGridSection,
};

export const DynamicComponent = (props) => {
  if (!props.type) {
    const propsOutput = JSON.stringify(props, null, 2);
    throw new Error(`Object does not have a 'type' property: ${propsOutput}`);
  }

  const Component = componentsMap[props.type];
  if (!Component) {
    throw new Error(`No component is registered for type:'${props.type}`);
  }
  return <Component {...props} />;
};
