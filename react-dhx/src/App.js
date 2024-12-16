import { useEffect, useState } from 'react';
import BasicGrid from './components/BasicGrid';
import BasicList from './components/BasicList';
import "@dhx/trial-suite/codebase/suite.min.css";
import './nhids.css';
import CardsList from './components/CardsList';
import { DateUtil, ObjectUtil } from './js/utils';
import useFetch from './js/useFetch';

const App = () => {
    const parseTitulo = (t) => ObjectUtil.parse(t, {
        'vencimento': 'date',
        'emissao': 'date',
    });
    const { data: fetchedTitulos, isLoading, error } = useFetch('http://localhost:3001/titulos');
    const [titulos, setTitulos] = useState([]);

    useEffect(() => {
        if (fetchedTitulos)
            setTitulos(fetchedTitulos.map(parseTitulo));
    }, [fetchedTitulos]);

    const gridConfig = {
        autoWidth: true,
        columns: [
            { id: "numero", header: [{ text: "Numero" }] },
            { id: 'fluxo', header: [{ text: 'Fluxo' }]},
            {
                id: "emissao",
                header: [{ text: "Data de emissao" }],
                type: 'date',
                dateFormat: '%d/%m/%Y',
            },
            {
                id: "vencimento",
                header: [{ text: "Data de vencimento" }],
                type: 'date',
                dateFormat: '%d/%m/%Y',
            },
            {
                id: "valor",
                header: [{ text: "Valor" }],
                type: "number",
                numberMask: { prefix: "R$" },
            },
            { id: 'estabelecimento', header: [{ text: 'Estabelecimento' }] },
        ],
        tooltip: false,
        //css: "grid",
        //multiselection: true,
        selection: "row",
        //editable: true,
    };
    const cardsListDataDef = {
        tips: [
            {
                attr: 'status',
                label: 'Situa\u00E7\u00E3o',
                mainClass: 'card-status',
                calculateClasses: (el) => [
                    (typeof el['rateios'] == 'object') ? 'success' : 'warning'
                ],
                calculateValue: (i) => 'A\u00E7\u00E3o ' + ((typeof i['rateios'] == 'object') ? 'realizada' : 'pendente')
            },
        ],
        data: [
            {
                attr: 'numero',
                label: 'N\u00FAmero',
                primary: true
            },
            {
                attr: 'emissao',
                label: 'Data de Emiss\u00E3o',
                calculateValue: (t) => DateUtil.asString(t.emissao)
            },
            {
                attr: 'vencimento',
                label: 'Data de Vencimento',
                calculateValue: (t) => DateUtil.asString(t.vencimento)
            },
            {attr: 'fluxo', label: 'Fluxo'},
            {attr: 'estabelecimento', label: 'Estabelecimento', eager: true}
        ]
    };
    return (
        <main>
            <h1>React elements</h1>
            <section id="grid-example">
                <h2>BasicGrid element</h2>
                <BasicGrid
                    gridData={ObjectUtil.copy(titulos)}
                    config={gridConfig}
                    pkey="id"
                    dblClick={(t) => console.log('titulo', t)}
                />
            </section>
            <section id="list-example">
                <h2>BasicList element</h2>
                <BasicList
                    listData={ObjectUtil.copy(titulos)}
                    pkey="numero"
                />
            </section>
            <section id="cards-list-example">
                <h2>CardsList element</h2>
                <CardsList
                    listData={ObjectUtil.copy(titulos)}
                    dataDef={cardsListDataDef}
                    pkey="numero"
                />
            </section>
        </main>
    );
};

export default App;
