import { observer } from 'mobx-react';
import 'echarts-jsx/dist/renderers/SVG';
import 'echarts-jsx/dist/components/title';
import 'echarts-jsx/dist/components/legend';
import 'echarts-jsx/dist/components/tooltip';
import 'echarts-jsx/dist/components/x-axis';
import 'echarts-jsx/dist/components/y-axis';
import 'echarts-jsx/dist/charts/bar';

import { i18n } from '../model/Translation';

const { t } = i18n;

export const ChartPage = observer(() => (
    <ec-svg-renderer style={{ height: '80vh' }}>
        <ec-title text={`ECharts ${t('examples')}`} />

        <ec-legend data={['sales']} />

        <ec-tooltip />

        <ec-x-axis
            data={[
                'Shirts',
                'Cardigans',
                'Chiffons',
                'Pants',
                'Heels',
                'Socks'
            ]}
        />
        <ec-y-axis />

        <ec-bar-chart
            name="sales"
            data={[5, 20, 36, 10, 10, 20]}
            onClick={console.log}
        />
    </ec-svg-renderer>
));
