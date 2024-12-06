var app = new Vue({
    el: '#ctrl-app',
    data: {
        selector: "T",
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
            "valor": "298.99",
            "estabelecimento": {
                "codigo": "AUT",
                "descricao": "Austin"
            },
            "contabilizado": false,
            "rateado": false
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
        }],
        selectedDoc: null,
    },
    computed: {
        titulos: function() {
            return this.titulosData.map((t) => this.parseTitulo(t));
        },
        lancamentos: function() {
            return this.lancamentosData.map((l) => this.parseLancamento(l));
        },
        titulosIsActive: function() {
            return this.selector == 'T';
        },
        lancamentosIsActive: function() {
            return this.selector == 'L';
        },
        anyDocumentSelected: function() {
            return this.selectedDoc != null;
        }
    },
    methods: {
        parseDocumento: function(doc) {
            return {
                fluxo: doc.cash_flow == 'IN' ? 'Entrada' : 'Sa\u00EDda',
                valor: doc.valor,
                estabelecimento: doc.estabelecimento.codigo + ' - ' + doc.estabelecimento.descricao,
                contabilizado: doc.contabilizado,
                rateado: doc.rateado,
            };
        },
        parseTitulo: function(t) {
            let tit = this.parseDocumento(t);
            tit.numero = t.numero;
            tit.emissao = t.emissao;
            tit.vencimento = t.vencimento;
            return tit;
        },
        parseLancamento: function(l) {
            let lanc = this.parseDocumento(l);
            lanc.documento = l.documento;
            lanc.conta = l.conta.codigo + ' - ' + l.conta.numero;
            lanc.historico = l.historico;
            lanc.data = l.data;
            return lanc;
        },
        selectTitulos: function() {
            this.selector = "T";
        },
        selectLancamentos: function () {
            this.selector = "L";
        },
        openModal: function(doc) {
            this.selectedDoc = doc;
        },
        closeModal: function() {
            this.selectedDoc = null;
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