export default function DocList() {
  return (
    <section className="doc-list">
      <h1 className="hidden" aria-hidden="false">Listagem dos documentos pendentes de rateio espec&iacute;fico no processamento de 10/10/2024 &agrave;s 14:00:00</h1>
      <ul className="cards-list" id="titulos-list" v-if="titulosIsActive">
        <li>
          <div className="card clickable">
            <ul className="tips inline-list">
              <li className="card-status">Status titulo</li>
            </ul>
            <ul className="data-info inline-list">
              <li className="card-info primary">
                <label className="upper-label" aria-hidden="false">N&uacute;mero</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly"
                  size="10" />
              </li>
              <li className="card-info">
                <label className="upper-label">Data de emiss&atilde;o</label>
                <input className="card-data"
                  type="date"
                  readonly="readonly" />
              </li>
              <li className="card-info">
                <label className="upper-label">Data de vencimento</label>
                <input className="card-data"
                  type="date"
                  readonly="readonly" />
              </li>
              <li className="card-info">
                <label className="upper-label">Fluxo</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly"
                  size="8" />
              </li>
              <li className="card-info">
                <label className="upper-label">Valor</label>
                <input className="card-data"
                  type="number"
                  readonly="readonly"
                  size="10" />
              </li>
              <li className="card-info eager-info">
                <label className="upper-label">Estabelecimento</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly" />
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul className="cards-list" id="lancamentos-list">
        <li>
          <div className="card clickable" >
            <ul className="tips inline-list">
              <li className="card-status"
              >status lancamento</li>
            </ul>
            <ul className="data-info inline-list">
              <li className="card-info primary">
                <label className="upper-label">Documento</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly"
                  size="10" />
              </li>
              <li className="card-info">
                <label className="upper-label">Conta</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly"
                  size="10" />
              </li>
              <li className="card-info">
                <label className="upper-label">Fluxo</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly"
                  size="8" />
              </li>
              <li className="card-info">
                <label className="upper-label">Estabelecimento</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly"
                  size="10" />
              </li>
              <li className="card-info">
                <label className="upper-label">Data do lan&ccedil;amento</label>
                <input className="card-data"
                  type="date"
                  readonly="readonly" />
              </li>
              <li className="card-info">
                <label className="upper-label">Valor</label>
                <input className="card-data"
                  type="number"
                  readonly="readonly"
                  size="10" />
              </li>
              <li className="card-info eager-info">
                <label className="upper-label">Hist&oacute;rico</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly" />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}