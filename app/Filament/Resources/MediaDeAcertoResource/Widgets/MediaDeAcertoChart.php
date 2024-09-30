<?php

namespace App\Filament\Resources\MediaDeAcertoResource\Widgets;

use Leandrocfe\FilamentApexCharts\Widgets\ApexChartWidget;

class MediaDeAcertoChart extends ApexChartWidget
{
    /**
     * Chart Id
     *
     * @var string
     */
    protected static ?string $chartId = 'mediaDeAcertoChart';

    /**
     * Widget Title
     *
     * @var string|null
     */
    protected static ?string $heading = 'MEDIA DE ACERTO';

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
                'type' => 'donut',
                'height' => 400,
                'stroke' => [
                    'show' => false
                ]
            ],
            'series' => [2, 4],
            'legend' => [],
            'dataLabels' => [
                'enabled' => false
            ],
            'plotOptions' => [
                'pie' => [
                    'donut' => [
                        'size' => '55%',
                        'labels' => [
                            'show' => true,
                           
                            'total' => [
                                'show' => true,
                                'showAlways' => true,
                                'label' => 'Total'
                            ]
                        ]
                    ],
                ]
            ],
            'colors' => ['#FF0000', '#00FF00'], // kept green and red colors
        ];
    }
}
