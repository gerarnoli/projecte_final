import BootstrapTable from 'react-bootstrap-table-next';
 
const products = [];
const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true
}];
 
export default () => <BootstrapTable keyField='id' data={ products } columns={ columns } />