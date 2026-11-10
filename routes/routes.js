import express from 'express'
import { createUser, getAll } from '../repositories/userrepositorie.js';
import { createTurma } from '../repositories/turmaRepositorie.js';

const router = express.Router();



router.route("/v1/user").post(createUser);
router.route("/v1/user").get(getAll);
router.route("/v1/user/:user").get().put().delete();

router.route("/v1/turma").post(createTurma);
router.route("/v1/turma{/:turma}").get();
router.route("/v1/turma/:turma").put().delete();

router.route("/matricula/:user/:turma").post().delete;

export default router;