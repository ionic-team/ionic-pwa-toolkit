import { createProviderConsumer } from '@stencil/state-tunnel';

export interface State {
  data: any[];
}

export default createProviderConsumer<State>({
    data: []
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);