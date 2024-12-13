//import MainContainer from "./dhx-demo/MainContainer";
import BasicGrid from './components/BasicGrid';
import BasicList from './components/BasicList';
import { useCallback, useEffect, useState } from 'react';
//import Sidebar from "./Sidebar";
import "@dhx/trial-suite/codebase/suite.min.css";
import './nhids.css';
import CardsList from './components/CardsList';
import { DateUtil, ObjectUtil } from './js/utils';
//import "./App.css";

const App = () => {
    const titulosPromise = useCallback(() => new Promise((resolve, reject) => {
        try {
            resolve([{
                numero: 'abc123',
                valor: 189.09,
                emissao: new Date('Jan 12, 2024'),
                vencimento: new Date('Jan 31, 2024'),
                fluxo: 'Entrada',
                estabelecimento: 'AUT - Austin'
            }, {
                numero: 'kwy888',
                valor: 445.50,
                emissao: new Date('Jan 4, 2024'),
                vencimento: new Date('Jan 31, 2024'),
                fluxo: 'Entrada',
                estabelecimento: 'AUT - Austin'
            }, {
                numero: 'def456',
                valor: 229.59,
                emissao: new Date('Mar 3, 2024'),
                vencimento: new Date('Mar 31, 2024'),
                fluxo: 'Entrada',
                estabelecimento: 'AUT - Austin'
            }, {
                numero: 'ghi789',
                valor: 230.49,
                emissao: new Date('Nov 12, 2024'),
                vencimento: new Date('Nov 30, 2024'),
                fluxo: 'Entrada',
                estabelecimento: 'AUT - Austin'
            }, {
                numero: 'zzz000',
                valor: 139.90,
                emissao: new Date('Jun 12, 2024'),
                vencimento: new Date('Jun 30, 2024'),
                fluxo: 'Entrada',
                estabelecimento: 'AUT - Austin'
            }]);
        } catch (error) {
            reject(error);
        }
    }), []);
    const [titulos, setTitulos] = useState([]);
    useEffect(() => {
        titulosPromise()
        .then(data => { setTitulos(data); })
        .catch(err => console.log('Erro ao recuperar os titulos', err));
    }, [])

    const gridConfig = {
        autoWidth: true,
        columns: [
        /*{
            gravity: 2,
            id: "time",
            header: [{ text: "Time", align: "center" }],
            type: "date",
            dateFormat: "%M %d, %H:%i",
        },*/
        { id: "numero", header: [{ text: "Numero" }] },
        {
            id: "valor",
            header: [{ text: "Valor" }],
            type: "number",
            numberMask: {
            prefix: "R$",
            },
        },
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
        ],
        //css: "grid",
        multiselection: true,
        selection: "complex",
        editable: true,
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
