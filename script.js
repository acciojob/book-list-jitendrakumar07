//your JS code here. If required.
 <div class="container">
    <h1>MyBookList</h1>
    <div class="form-group">
      <input type="text" id="title" class="form-control" placeholder="Book Title">
      <input type="text" id="author" class="form-control" placeholder="Author">
      <input type="text" id="isbn" class="form-control" placeholder="ISBN Number">
      <button id="submit" class="btn btn-primary">Submit</button>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN#</th>
        </tr>
      </thead>
      <tbody id="book-list">
      </tbody>
    </table>