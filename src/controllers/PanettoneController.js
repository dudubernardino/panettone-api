// API REST com dados estáticos.
const panettones = require('../data/panettoneInfo');

class PanettoneController {
  async get(req, res) {
    try {
      return res.json(panettones);
    } catch(err) {
      console.log(err);
    }
  }

  async getById(req, res) {
    try {
      const {id} = req.params;
      
      if(id > panettones.length) {
        return res.json({ message: 'Panetone não encontrado.'});
      }

      panettones.filter((panettone) => {
        if(panettone.id === Number(id)) {
          return res.json(panettone);
        }
      });
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = new PanettoneController();