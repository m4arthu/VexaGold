<?php

namespace App\Filament\Resources\RendimentosResource\Widgets;

use Leandrocfe\FilamentApexCharts\Widgets\ApexChartWidget;

class RendimentosChart extends ApexChartWidget
{
    /**
     * Chart Id
     *
     * @var string
     */
    protected static ?string $chartId = 'rendimentos';

    /**
     * Widget Title
     *
     * @var string|null
     */
    protected static ?string $heading = 'RENDIMENTOS';

    protected function getFilters(): ?array
    {
        return [
            'last7days' => 'Ultimos 7 Dias'
        ];
    }
    /**
     * Chart options (series, labels, types, size, animations...)
     * https://apexcharts.com/docs/options
     *
     * @return array
     */
    protected function getOptions(): array
    {
        return [
            'chart' => [
                'type' => 'area',
                'height' => 300,

            ],
            'dataLabels' => [
                'enabled' => false,
            ],
            'series' => [
                [
                    'name' => 'RENDIMENTOS',
                    'data' => ['100,00', '1.000,00', '60.000,00', '10.000,00', '14.000.000,00', '700.000,00', '10000'],
                ],
            ],
            'xaxis' => [
                'axisTicks' => [
                    'show' => false,
                ],
                'axisBorder' => [
                    'show' => false,
                ],
                'categories' => ['01/09', '02/09', '03/09', '04/09', '05/09', '06/09', '07/09'],
                'labels' => [
                    'style' => [
                        'fontFamily' => 'inherit',
                    ],
                ],
            ],
            'yaxis' => [
                'labels' => [
                    'style' => [
                        'fontFamily' => 'inherit',
                    
                    ],
                ],
            ],
            'colors' => ['#2FFE82'],
            'stroke' => [
                'curve' => 'smooth',
            ],
            'grid' => [

                'yaxis' => [
                    'lines' => [
                        'show' => false,
                    ],
                ],
            ],
            'tooltip' => [
                'enabled' => false,
            ],
        ];
    }
}
