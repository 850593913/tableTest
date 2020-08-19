import Mock from 'mockjs'


Mock.mock('/getData',{
  'dataSource|1000': [
    {
      'key|+1':1,
      'name|+1':1
    }
  ]
})

Mock.mock('/getColumns',{
  'columns|20':[{
    'title|+1':1,
    'dataIndex|+1':1,
  }]
})

export default Mock
