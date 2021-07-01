const express =  require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/item');

//@router GET request
//@decs GT ALL ITMS
//@access Public
router.get('/',(req,res) => {
    Item.find()
    .sort({date  : -1})
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: is hr ' + err));
});

//@router POST request
//@decs post ALL ITMS
//@access Public

/*/
router.post('/',(req,res) => {
    const newItem = new Item({
        name: res.body.name
    });

    newItem.save()
    .then(item => res.json(item))
    .catch(err => res.json('Error: is hr ' + err));
});

/*/

router.post('/',  (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  try {
    const item =  newItem.save();
    if (!item) throw Error('Something went wrong saving the item');

    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// del is notwroing yet

router.delete('/:id', async (req, res) => {
 const id = req.params.id;
  try {
    const result = await Item.findByIdAndDelete(id);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

/*/

var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((items) => {
       if (!items) {
          return res.status(404).send();
       }
       res.send(items);
  }).catch((e) => {
    res.status(400).send();
  });

router.delete('/:id', (req, res) => {
  var id = req.params.id;
  console.log(id);
  if (!ObjectID.isValid(id)) {
    return res.status(404).json('data not delete'+res);
  }
  Todo.findByIdAndRemove(id).then((todo) => {
       if (!todo) {
          return res.status(404).send();
       }
       res.send(todo);
  }).catch((e) => {
    res.status(400).send();
  });
});
///router.delete('/:id', inject('deleteUser'), this.delete);
/*/

module.exports = router; 