import React from 'react';
import First from './First';
import Second from './Second';

const App = () => {
  return (
    <div>
      <First/>
      <div>
        <div className="bg-info-subtle m-5 rounded">
          <div className="mb-3 row p-3">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label fw-bold">Email</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control" id="inputEmail" />
              </div>
            </div>
            <div className="mb-3 row p-3">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label fw-bold">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>


      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias omnis quaerat, adipisci ipsum nesciunt sunt? Exercitationem excepturi possimus nam dolor corporis fuga, voluptas ea numquam est illo odit itaque? Qui placeat earum ab saepe mollitia, natus tempore ipsa optio, iure quo vero in esse? Culpa accusamus rerum illo aliquam repudiandae et ex. Ullam quae perferendis corporis repellendus minus omnis delectus facilis porro hic, ex aliquam rem, in natus. Voluptates asperiores nihil repudiandae natus architecto dolor quibusdam commodi saepe sapiente, molestiae corporis atque perferendis rem totam voluptas incidunt itaque non eum odio. Quasi iste quisquam maiores iusto aspernatur, iure inventore qui doloribus quos eos adipisci saepe, quis odio eius sit nesciunt corrupti consequuntur ducimus ipsa accusantium rerum eum. Hic explicabo, quasi consequatur temporibus, magni repudiandae debitis mollitia perspiciatis ipsum natus tempora eaque excepturi atque nemo ab tenetur at sapiente dolorem corrupti quis saepe aut officia. Neque obcaecati voluptates saepe est fugit voluptate? Dolores architecto adipisci fuga, accusantium earum rem dignissimos esse nam. Alias vero natus eveniet libero officia sunt quibusdam iusto accusantium ex rem. Consequatur illum id dolore ea quibusdam? Maiores totam sit repellat, deserunt delectus soluta sint aliquam amet, saepe suscipit eum. Blanditiis sequi illum rerum. Quas minus aperiam cupiditate.</p>

      <div>
          <table class="table table-info table-striped-columns m-5 rounded">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
              </tr>
            </tbody>
          </table>
      </div>

      <Second/>
      
    </div>
  );
};

export default App;