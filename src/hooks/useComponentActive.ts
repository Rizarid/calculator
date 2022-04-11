import { useSelector } from 'react-redux';

import { AppState } from '../redux/store';

interface UseComponentActiveProps {
  componentName: string;
  fromPalette: boolean;
}

export const useComponentActive = (props: UseComponentActiveProps) => {
  const { componentName, fromPalette } = props;

  const { componentsList } = useSelector((state: AppState) => state.addedComponents);
  const componentAdded = componentsList.includes(componentName);
  const isComponentActive = !componentAdded || !fromPalette;

  return isComponentActive;
};
