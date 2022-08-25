import mongoose from '@/database';

const ExemploSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Exemplo', ExemploSchema);
