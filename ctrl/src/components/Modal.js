export default function Modal() {
  return (
    <div className="modal" v-if="anyDocumentSelected">
      <article className="modal-content">
        <header>
          <h1>Informa&ccedil;&otilde;es do Documento</h1>
          <span className="primary">
            Numero ou documento
          </span>
          <span className="card-status"
          >status</span>
        </header>
        <main>
          <section className="doc-info">
            <ul className="data-info inline-list" v-if="selector == 'T'">
              <li className="card-info">
                <label className="upper-label">Data de emiss&atilde;o</label>
                <input className="card-data"
                  type="date"
                  readonly="readonly"
                  v-model="selectedDoc.emissao" />
              </li>
              <li className="card-info">
                <label className="upper-label">Data de vencimento</label>
                <input className="card-data"
                  type="date"
                  readonly="readonly"
                  v-model="selectedDoc.vencimento" />
              </li>
              <li className="card-info">
                <label className="upper-label">Fluxo</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly"
                  size="8"
                  v-model="selectedDoc.fluxo"/>
              </li>
              <li className="card-info">
                <label className="upper-label">Valor</label>
                <input className="card-data"
                  type="number"
                  readonly="readonly"
                  size="10"
                  v-model="selectedDoc.valor" />
              </li>
              <li className="card-info eager-info">
                <label className="upper-label">Estabelecimento</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly"
                  v-model="selectedDoc.estabelecimento" />
              </li>
            </ul>
            <ul className="data-info inline-list" v-if="selector == 'L'">
              <li className="card-info">
                <label className="upper-label">Conta</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly"
                  size="10"
                  v-model="selectedDoc.conta" />
              </li>
              <li className="card-info">
                <label className="upper-label">Fluxo</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly"
                  size="8"
                  v-model="selectedDoc.fluxo" />
              </li>
              <li className="card-info">
                <label className="upper-label">Estabelecimento</label>
                <input className="card-data"
                  type="text"
                  readonly="readonly"
                  size="10"
                  v-model="selectedDoc.estabelecimento" />
              </li>
              <li className="card-info">
                <label className="upper-label">Data do lan&ccedil;amento</label>
                <input className="card-data"
                  type="date"
                  readonly="readonly"
                  v-model="selectedDoc.data" />
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
          </section>
          <section id="rateios">
            <header>
              <p>Distribui&ccedil;&atilde;o do documento</p>
              <hr />
            </header>
            <p>
              Distribua os valores nas dimens&otilde;es abaixo. Voc&ecirc; pode adicionar ou remover
              distribui&ccedil;&otilde;es em qualquer uma das dimens&otilde;es, n&atilde;o sendo
              necess&aacute;rio utilizar todas. A a&ccedil;&atilde;o s&oacute; ser&aacute; conclu&iacute;da
              quando a soma atingir 100%.
            </p>
            <div className="container-apports">
              <ul className="inline-list">
                <li>
                  <header className="apports-action justify-right">
                    <button className="tertiary-btn clickable">Adicionar distribui&ccedil;&atilde;o</button>
                  </header>
                  <table className="apports-table">
                    <thead>
                      <th><label>Classifica&ccedil;&atilde;o financeira</label></th>
                      <th>Valor</th>
                      <th>%</th>
                      <th></th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="select-data">
                          <select v-model="apportCF.classificacaofinanceira">
                            <option disabled value="">Escolha</option>
                            <option>
                              codigo e descricao
                            </option>
                          </select>
                        </td>
                        <td className="numeric-value">
                          <input type="number" step="0.01"/>
                        </td>
                        <td className="percent-value">
                          <input type="number" step="0.01" size="5" max="999.99" min="-999.99"/>
                        </td>
                        <td>
                          <button className="delete-apport tertiary-btn danger">
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <td className="text-value">Total</td>
                      <td className="numeric-value">Valor</td>
                      <td className="percent-value">Percent</td>
                      <td></td>
                    </tfoot>
                  </table>
                </li>
                <li>
                  <header className="apports-action flex-container justify-right">
                    <button className="tertiary-btn clickable">Adicionar distribui&ccedil;&atilde;o</button>
                  </header>
                  <table className="apports-table">
                    <thead>
                      <th className="th-apport">Centro de custo</th>
                      <th className="th-value">Valor</th>
                      <th className="th-percent">%</th>
                      <th className="th-delete"></th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="select-data">
                          <select>
                            <option disabled value="">Escolha</option>
                            <option>
                              codigo e descricao
                            </option>
                          </select>
                        </td>
                        <td className="numeric-value">
                          <input type="number" step="0.01"/>
                        </td>
                        <td className="percent-value">
                          <input type="number" step="0.01" size="5" max="999.99" min="-999.99"/>
                        </td>
                        <td>
                          <button className="delete-apport tertiary-btn danger">
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <td className="tf-apport text-value">Total</td>
                      <td className="tf-value numeric-value">valor</td>
                      <td className="tf-percent percent-value">percent</td>
                      <td className="tf-delete"></td>
                    </tfoot>
                  </table>
                </li>
                <li>
                  <header className="apports-action flex-container justify-right">
                    <button className="tertiary-btn clickable">Adicionar distribui&ccedil;&atilde;o</button>
                  </header>
                  <table className="apports-table">
                    <thead>
                      <th className="th-apport">Projeto</th>
                      <th className="th-value">Valor</th>
                      <th className="th-percent">%</th>
                      <th className="th-delete"></th>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="select-data">
                          <select>
                            <option disabled value="">Escolha</option>
                            <option>
                              codigo e descricao
                            </option>
                          </select>
                        </td>
                        <td className="numeric-value">
                          <input type="number" step="0.01"/>
                        </td>
                        <td className="percent-value">
                          <input type="number" step="0.01" size="5" max="999.99" min="-999.99"/>
                        </td>
                        <td>
                          <button className="delete-apport tertiary-btn danger clickable">
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <td className="tf-apport tbl-total text-value">Total</td>
                      <td className="tf-value numeric-value">valor</td>
                      <td className="tf-percent percent-value">percent</td>
                      <td className="tf-delete"></td>
                    </tfoot>
                  </table>
                </li>
              </ul>
            </div>
          </section>
        </main>
        <footer className="flex-container justify-right">
          <button className="action-btn primary-btn clickable">Salvar</button>
          <button className="action-btn secondary-btn clickable">Fechar</button>
        </footer>
      </article>
    </div>
  );
}