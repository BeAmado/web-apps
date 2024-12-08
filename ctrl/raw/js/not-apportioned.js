var app = new Vue({
    el: '#ctrl-app',
    data: {
        selector: "T",
        filterFields: {
            titulos: [
                {attr: 'status', label: 'Situa\u00E7\u00E3o'},
                {attr: 'numero', label: 'N\u00FAmero'},
                {attr: 'emissao', label: 'Data de Emiss\u00E3o'},
                {attr: 'vencimento', label: 'Data de Vencimento'},
                {attr: 'fluxo', label: 'Fluxo'},
                {attr: 'estabelecimento', label: 'Estabelecimento'}
            ],
            lancamentos: [
                {attr: 'status', label: 'Situa\u00E7\u00E3o'},
                {attr: 'documento', label: 'Documento'},
                {attr: 'data', label: 'Data do Lan\u00E7amento'},
                {attr: 'fluxo', label: 'Fluxo'},
                {attr: 'estabelecimento', label: 'Estabelecimento'},
                {attr: 'conta', label: 'Conta'}
            ]
        },
        pks: {
            'CC': 'centrocusto',
            'CF': 'classificacaofinanceira',
            'PR': 'projeto'
        },
        titulosData: [{
            "numero": "ABC123",
            "emissao": "2024-01-13",
            "vencimento": "2024-01-31",
            "sinal": 0,
            "cash_flow": "IN",
            "valor": "157.29",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "contabilizado": false,
            "rateado": false
        }, {
            "numero": "ABC456",
            "emissao": "2024-01-19",
            "vencimento": "2024-01-31",
            "sinal": 0,
            "cash_flow": "IN",
            "valor": 298.99,
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "contabilizado": false,
            "rateios": {
                "CC": [{
                    "centrocusto": "ecd55297-49ee-481c-9b9b-46b1ce7ae071",
                    "valor": 200
                }, {
                    "centrocusto": "9d6d2f54-225c-41fe-a9ce-6956b639b9b1",
                    "valor": 98.99
                }],
                "CF": [{
                    "classificacaofinanceira": "a094137a-9246-4c62-9154-caff85f298ca",
                    "valor": 298.99
                }],
                "PR": [{
                    "projeto": "50f50a3d-3b17-49e1-84f2-ea3a9246bd2c",
                    "valor": 150
                }, {
                    "projeto": "78ef0dd2-ccfc-40ae-acc7-879fcd545956",
                    "valor": 130
                }, {
                    "projeto": "d6c4398a-79a8-4455-b1af-d2b78f0fb586",
                    "valor": 18.99
                }]
            }
        }, {
            "numero": "XYZ333",
            "emissao": "2024-02-01",
            "vencimento": "2024-02-07",
            "sinal": 1,
            "cash_flow": "OUT",
            "valor": "1579.07",
            "estabelecimento": {
                "codigo": "DAL",
                "descricao": "Dallas"
            },
            "contabilizado": false,
            "rateado": false
        }, {
            "numero": "XYZ899",
            "emissao": "2024-02-13",
            "vencimento": "2024-02-21",
            "sinal": 1,
            "cash_flow": "OUT",
            "valor": "1015.89",
            "estabelecimento": {
                "codigo": "DAL",
                "descricao": "Dallas"
            },
            "contabilizado": false,
            "rateado": false
        }, {
            "numero": "ABC789",
            "emissao": "2024-02-02",
            "vencimento": "2024-02-31",
            "sinal": 0,
            "cash_flow": "IN",
            "valor": "2400.00",
            "estabelecimento": {
                "codigo": "DAL",
                "descricao": "Dallas"
            },
            "contabilizado": false,
            "rateado": false
        }],
        lancamentosData: [{
            "documento": "DOC123",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 0,
            "cash_flow": "OUT",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-01-26",
            "valor": "290.89",
            "historico": "Pagamento de d\u00EDvidas do m\u00EAs passado"
        }, {
            "documento": "DOC456",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 1,
            "cash_flow": "IN",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-02-28",
            "valor": "2900.89",
            "historico": "Venda de m\u00F3dulo de acelera\u00E7\u00E3o de foguetes"
        }, {
            "documento": "DOC789",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 0,
            "cash_flow": "OUT",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-03-26",
            "valor": "29709.23",
            "historico": "Pagamento dos colaboradores"
        }, {
            "documento": "DOC123",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 0,
            "cash_flow": "OUT",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-01-26",
            "valor": "290.89",
            "historico": "Pagamento de d\u00EDvidas do m\u00EAs passado"
        }, {
            "documento": "DOC456",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 1,
            "cash_flow": "IN",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-02-28",
            "valor": "2900.89",
            "historico": "Venda de m\u00F3dulo de acelera\u00E7\u00E3o de foguetes"
        }, {
            "documento": "DOC789",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 0,
            "cash_flow": "OUT",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-03-26",
            "valor": "29709.23",
            "historico": "Pagamento dos colaboradores"
        }, {
            "documento": "DOC123",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 0,
            "cash_flow": "OUT",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-01-26",
            "valor": "290.89",
            "historico": "Pagamento de d\u00EDvidas do m\u00EAs passado"
        }, {
            "documento": "DOC456",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 1,
            "cash_flow": "IN",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-02-28",
            "valor": "2900.89",
            "historico": "Venda de m\u00F3dulo de acelera\u00E7\u00E3o de foguetes"
        }, {
            "documento": "DOC789",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 0,
            "cash_flow": "OUT",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-03-26",
            "valor": "29709.23",
            "historico": "Pagamento dos colaboradores"
        }, {
            "documento": "DOC123",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 0,
            "cash_flow": "OUT",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-01-26",
            "valor": "290.89",
            "historico": "Pagamento de d\u00EDvidas do m\u00EAs passado"
        }, {
            "documento": "DOC456",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 1,
            "cash_flow": "IN",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-02-28",
            "valor": 2900.89,
            "historico": "Venda de m\u00F3dulo de acelera\u00E7\u00E3o de foguetes",
            "rateios": {
                "CC": [{
                    "centrocusto": "ecd55297-49ee-481c-9b9b-46b1ce7ae071",
                    "valor": 2000
                }, {
                    "centrocusto": "9d6d2f54-225c-41fe-a9ce-6956b639b9b1",
                    "valor": 900.89
                }],
                "CF": [{
                    "classificacaofinanceira": "a094137a-9246-4c62-9154-caff85f298ca",
                    "valor": 2900.89
                }],
                "PR": [{
                    "projeto": "50f50a3d-3b17-49e1-84f2-ea3a9246bd2c",
                    "valor": 1500
                }, {
                    "projeto": "78ef0dd2-ccfc-40ae-acc7-879fcd545956",
                    "valor": 1300
                }, {
                    "projeto": "d6c4398a-79a8-4455-b1af-d2b78f0fb586",
                    "valor": 100.89
                }]
            }
        }, {
            "documento": "DOC789",
            "conta": {
                "codigo": "CTX",
                "numero": "12345"
            },
            "sinal": 0,
            "cash_flow": "OUT",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "data": "2024-03-26",
            "valor": "29709.23",
            "historico": "Pagamento dos colaboradores"
        }],
        projetos: [{
            'projeto': '50f50a3d-3b17-49e1-84f2-ea3a9246bd2c',
            'codigo': 'PR.01',
            'nome': 'Projeto #1',
        }, {
            'projeto': '390d781e-f586-4ab0-b608-d4fdc87f5b94',
            'codigo': 'PR.02',
            'nome': 'Projeto #2',
        }, {
            'projeto': 'f3359744-2ebd-48d0-862e-52901501242e',
            'codigo': 'PR.03',
            'nome': 'Projeto #3',
        }, {
            'projeto': '78ef0dd2-ccfc-40ae-acc7-879fcd545956',
            'codigo': 'PR.04',
            'nome': 'Projeto #4',
        }, {
            'projeto': 'd6c4398a-79a8-4455-b1af-d2b78f0fb586',
            'codigo': 'PR.05',
            'nome': 'Projeto #5',
        }],
        classfin: [{
            'classificacaofinanceira': 'bfc6cc68-be23-4430-9c83-5c2bf3b9abd9',
            'codigo': 'CF.01',
            'descricao': 'Class. Fin. #1'
        }, {
            'classificacaofinanceira': 'a094137a-9246-4c62-9154-caff85f298ca',
            'codigo': 'CF.02',
            'descricao': 'Class. Fin. #2'
        }, {
            'classificacaofinanceira': 'a582f32b-1f01-42df-b3e0-24558254987b',
            'codigo': 'CF.03',
            'descricao': 'Class. Fin. #3'
        }, {
            'classificacaofinanceira': '844db916-0df1-44ed-954f-b93e37f48d3b',
            'codigo': 'CF.04',
            'descricao': 'Class. Fin. #4'
        }, {
            'classificacaofinanceira': 'ec81093a-8215-4a45-a153-07361bbe8c9f',
            'codigo': 'CF.05',
            'descricao': 'Class. Fin. #5'
        }],
        centros: [{
            'centrocusto': '5ba58cb6-96a9-455f-9466-985da79e3dac',
            'codigo': 'CC.01',
            'descricao': 'Centro de Custo #1'
        }, {
            'centrocusto': '9d6d2f54-225c-41fe-a9ce-6956b639b9b1',
            'codigo': 'CC.02',
            'descricao': 'Centro de Custo #2'
        }, {
            'centrocusto': 'ecd55297-49ee-481c-9b9b-46b1ce7ae071',
            'codigo': 'CC.03',
            'descricao': 'Centro de Custo #3'
        }, {
            'centrocusto': '0bb5cc9c-c3a2-494a-a9f7-c6d45a84596b',
            'codigo': 'CC.04',
            'descricao': 'Centro de Custo #4'
        }, {
            'centrocusto': '06837fe1-386d-4dc8-afd9-90e1ed170dc9',
            'codigo': 'CC.05',
            'descricao': 'Centro de Custo #5'
        }],
        selectedDoc: null,
        virtualApports: null,
        filterText: ''
    },
    computed: {
        titulos: function() {
            return this.titulosData.map((t) => this.parseTitulo(t));
        },
        filteredTitulos: function() {
            return this.filterTitulosUsingTextFilter(
                this.titulosData.map((t) => this.parseTitulo(t)),
                this.filterText
            );
        },
        lancamentos: function() {
            return this.lancamentosData.map((l) => this.parseLancamento(l));
        },
        filteredLancamentos: function() {
            return this.filterLancamentosUsingTextFilter(
                this.lancamentosData.map((l) => this.parseLancamento(l)),
                this.filterText
            );
        },
        titulosIsActive: function() {
            return this.selector == 'T';
        },
        lancamentosIsActive: function() {
            return this.selector == 'L';
        },
        anyDocumentSelected: function() {
            return this.selectedDoc != null;
        },
        availableFilters: function() {
            return (this.selector == 'T')
                ? this.filterFields.titulos
                : this.filterFields.lancamentos;
        },
        changedApports: function() {
            if (!this.virtualApports)
                return false;
            return !this.sameApports(
                this.apportsValues(this.selectedDoc.rateios),
                this.apportsValues(this.virtualApports)
            );
        },
        filterPlaceholder: function() {
            return `Pesquisar por ${this.selector == 'T' ? 'n\u00FAmero' : 'documento'}, estabelecimento ou valor`;
        }
    },
    filters: {
        round2: function(value) {
            if (typeof value == 'number')
                return value.toFixed(2);
            else
                return value;
        },
        money: function(value) {
            return 'R$' + value.replace('.', ',');
        },
        percent: function(value) {
            return value.replace('.', ',').replace('%', '') + '%';
        }
    },
    methods: {
        apports1InApports2: function(apports1, apports2) {
            for (let dim of Object.keys(apports1)) {
                if (!(dim in apports2)) {
                    return false;
                }
                for (let pk of Object.keys(apports1[dim])) {
                    if (! (pk in apports2[dim])) {
                        return false;
                    }
                    if (apports2[dim][pk] != apports1[dim][pk]) {
                        return false;
                    }
                }
            }
            return true;
        },
        sameApports: function(apportsX, apportsY) {
            return this.apports1InApports2(apportsX, apportsY)
                && this.apports1InApports2(apportsY, apportsX);
        },
        parseDocumento: function(doc) {
            return {
                fluxo: doc.cash_flow == 'IN' ? 'Entrada' : 'Sa\u00EDda',
                valor: doc.valor,
                estabelecimento: doc.estabelecimento.codigo + ' - ' + doc.estabelecimento.descricao,
                contabilizado: doc.contabilizado,
                status: 'A\u00E7\u00E3o ' + (
                    (doc.rateios && (Object.keys(doc.rateios).length > 0)) ? 'realizada' : 'pendente'
                ),
                rateios: doc.rateios,
                rateado: (doc.rateios && (Object.keys(doc.rateios).length > 0))
            };
        },
        parseTitulo: function(t) {
            return (function (tit) {
                tit.numero = t.numero;
                tit.emissao = t.emissao;
                tit.vencimento = t.vencimento;
                return tit;
            })(this.parseDocumento(t));
        },
        parseLancamento: function(l) {
            return (function (lanc) {
                lanc.documento = l.documento;
                lanc.conta = l.conta.codigo + ' - ' + l.conta.numero;
                lanc.historico = l.historico;
                lanc.data = l.data;
                return lanc;
            })(this.parseDocumento(l));
        },
        filterTitulosUsingTextFilter: function(titulosList, textFilter) {
            return (textFilter && (textFilter.trim().length > 0))
                ? titulosList.filter(t => Number(t.valor).toFixed(2).replace('.', ',').includes(textFilter)
                    || t.numero.toLowerCase().includes(textFilter.toLowerCase())
                    || t.estabelecimento.toLowerCase().includes(textFilter.toLowerCase()))
                : titulosList;
        },
        filterLancamentosUsingTextFilter: function(lancamentosList, textFilter) {
            return (textFilter && (textFilter.trim().length > 0))
                ? lancamentosList.filter(t => Number(t.valor).toFixed(2).replace('.', ',').includes(textFilter)
                    || t.documento.toLowerCase().includes(textFilter.toLowerCase())
                    || t.estabelecimento.toLowerCase().includes(textFilter.toLowerCase())
                    || t.historico.toLowerCase().includes(textFilter.toLowerCase()))
                : lancamentosList;
        },
        copyObj: function(obj) {
            if (typeof obj == 'object')
                return (Array.isArray(obj))
                    ? obj.map((i) => this.copyObj(i))
                    : ((copyTo) => {
                        Object.keys(obj).forEach(attr => {
                            copyTo[attr] = this.copyObj(obj[attr]);
                        });
                        return copyTo;
                    })({});
            else
                return obj;
        },
        apportsValues: function(apports) {
            return ((hash) => {
                Object.keys(hash).forEach(dim => {
                    if (apports && (dim in apports))
                        apports[dim].forEach((apport) => {
                            hash[dim][apport[this.pks[dim]]] = apport.valor;
                        });
                });
                return hash;
            })({
                'CC': {},
                'CF': {},
                'PR': {}
            });
        },
        getVirtualApports: function(doc) {
            return ((virt) => {
                if (doc.rateios)
                    Object.keys(doc.rateios).forEach(dim => {
                        if (dim in virt)
                            doc.rateios[dim].forEach(apport => {
                                virt[dim].push(this.copyObj(apport));
                            });
                            virt[dim].forEach(a => {
                                if (! ('percent' in a))
                                    this.calculatePercent(a);
                            });
                    });
                return virt;
            })({
                'CC': [],
                'CF': [],
                'PR': []
            });
        },
        setApports: function(doc, apports) {
            doc.rateios = this.getVirtualApports({rateios: apports});
        },
        addVirtualApport: function(dim) {
            this.virtualApports[dim].push(((newApport) => {
                newApport[this.pks[dim]] = '';
                newApport['valor'] = 0;
                return newApport;
            })({}));
        },
        editApportValue: function(dim, i, newValue) {
            this.virtualApports[dim][i].valor = newValue;
        },
        removeVirtualApport: function(dim, i) {
            if (this.virtualApports && this.virtualApports[dim])
                this.virtualApports[dim].splice(i, 1)
        },
        saveApports: function() {
            this.setApports(this.selectedDoc, this.virtualApports);
            this.closeModal();
        },
        calculatePercent: function(apport) {
            apport['percentual'] = Math.round(apport['valor'] / (this.selectedDoc.valor || 1) * 10000) / 100;
        },
        calculateValue: function(apport) {
            apport['valor'] = Math.round(apport['percentual'] * (this.selectedDoc.valor || 0)) / 100;
        },
        selectTitulos: function() {
            this.selector = "T";
        },
        selectLancamentos: function () {
            this.selector = "L";
        },
        openModal: function(doc) {
            this.selectedDoc = doc;
            this.virtualApports = this.getVirtualApports(doc);
        },
        closeModal: function() {
            this.selectedDoc = null;
            this.virtualApports = null;
        },
        getTotalValue: function(dim) {
            if (this.virtualApports && this.virtualApports[dim]) {
                return this.virtualApports[dim].reduce(
                    (total, apport) => total + apport.valor,
                    0
                );
            } else
                return 0;
        },
        getTotalPercent: function(dim) {
            return this.getTotalValue(dim) / this.selectedDoc.valor * 100;
        },
        loadTitulos: function() {
            fetch('../data/titulos.json')
            .then(response => response.json())
            .then(data => {
                this.titulosData.length = 0;
                data.forEach(t => {
                    this.titulosData.push(t);
                });
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });
        },
        loadLancamentos: function() {
            fetch('../data/lancamentos.json')
            .then(response => response.json())
            .then(data => {
                this.lancamentosData.length = 0;
                data.forEach(l => {
                    this.lancamentosData.push(l);
                });
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });
        },
    }
});