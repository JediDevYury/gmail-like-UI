import {ReactElement, useEffect} from "react";
import useResponsiveLayout from "@/hooks/use-responsive-layout.tsx";

type Props = {
  renderOnTablet?: ReactElement<any, any>
  renderOnPhone?: ReactElement<any, any>
  onLayoutChange?: (layout: 'phone' | 'tablet') => void
}

const ResponsiveLayout = (props: Props) => {
  const {isTablet}  = useResponsiveLayout()
  const {renderOnTablet, renderOnPhone, onLayoutChange} = props

  let children: ReactElement<any, any> | null = null;

  if(isTablet && renderOnTablet) {
    children = renderOnTablet
  } else {
    children = renderOnPhone || null
  }

  useEffect(() => {
    onLayoutChange && onLayoutChange(isTablet ? 'tablet' : 'phone')
  }, [isTablet])

  return children;
}

export default ResponsiveLayout
