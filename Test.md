> **CONTENT**

1. [Introduction](#introduction)
2. [Liste des Acteurs](#listofactors)
3. [Liste des Cas d'Utilisation](#liste-des-cas-d'utilisation)
  1.1 [Gestion des Processus](#gestion-des-processus)
  1.2 [Gestion des Documents](#gestion-des-documents)
  1.3 [Gestion des Utilisateurs](#gestion-des-utilisateurs)
  1.4 [Gestion du Tableau de Bord](#gestion-du-tableau-de-bord)
  1.5 [Cas d'utilisation Commun](#cas-d'utilisation-commun)
4. [Diagramme de Cas d'Utilisation](#diagramme-de-cas-d'utilisation)

## Introduction

Ce document présente les différentes fonctionnalités du module de gestion des processus de l'outil **Qualipro**. Ces différentes fonctionnalités seront regroupées dans un diagramme de cas d'utilisation pour une meilleure collaboration entre les différentes parties prenantes du projet. 

## Liste des Acteurs

Cet outil bien qu'étant destiné à la DRAP et plus précisément la DQP, toutes les entités d'OCM l'utiliseront. Suite à la lecture du cahier de charge, nous avons pu desceller les acteurs suivants : 

- **Administrateur** :  C'est un agent OCM disposant de tous les droits sur la plateforme. Ses principales actions sont la gestion des utilisateurs et l'attribution des droits. 

- **Agent DQP** : C'est un agent du département qualité dont ses actions seront principalement la gestion des processus et des documents, 

- **Employé OCM** :  C'est un employé lambda d'OCM ne faisant pas partie du département DQP. Ses principales actions sont la gestion des documents (création, consultation et modification)

## Liste des Cas d'Utilisation

### Gestion des Processus 

- **Créer un Processus** 
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** :  L'objectif de cette fonctionnalité est de créer un processus à ajouter dans la cartographie des processus de OCM

- **Modifier un Processus**  
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** : L'objectif de cette fonctionnalité est de  modifier un processus. 

- **Créer une Procédure**  : 
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** :  L'objectif de cette fonctionnalité est de créer une procédure.

- **Modifier un Procédure** 
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** :   L'objectif de cette fonctionnalité est de modifier une procédure.

- **Gestion des Clusters** 
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** :   L'objectif de cette fonctionnalité est de gérer les cluster de processus 

- **Valider une procédure**
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** :  L'objectif de cette fonctionnalité est de modifier une procédure.

- **Déclarer un dysfonctionnement**
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** : L'objectif de cette fonctionnalité est de déclarer un dysfonctionnement lors du déroulement d'un processus. 

### Gestion des Documents

- **Créer un document** 
   - **Acteur(s)** :  Tous les acteurs
   - **Description** : L'objectif de cette fonctionnalité est de créer un document (des templates peuvent être utiliser)

- **Modifier un document**
   - **Acteur(s)** : Tous les acteurs
   - **Description** : L'objectif de cette fonctionnalité est de modifier un document.

- **Diffuser un document**
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** :  L'objectif de cette fonctionnalité est de diffuser un document au sein du réseau local de OCM. Seul ceux sélectionner lors de la diffusion pourront consulter le document. 

- **Gérer les droits d'accès d'un document**
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** : L'objectif de cette fonctionnalité est de gérer les droits d'accès à un document. 

- **Valider un document**
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** : L'objectif de cette fonctionnalité est de valider un document lors de l'exécution d'un processus .

- **Consulter un document** 
   - **Acteur(s)** : Tous les acteurs
   - **Description** : L'objectif de cette fonctionnalité est de consulter un document. 

- **Archiver un document**
   - **Acteur(s)** : Tous les acteurs
   - **Description** : L'objectif de cette fonctionnalité est d'archiver un document. 

- **Rechercher un document**
   - **Acteur(s)** : Tous les acteurs
   - **Description** : L'objectif de cette fonctionnalité est de rechercher un document suivant certains critères (métadonnées d'un document)



### Gestion des Utilisateurs et des Droits d'accès

- **Gestion des droits d'accès**
   - **Acteur(s)** : Administrateur
   - **Description** : L'objectif de cette fonctionnalité est de gérer l'ensemble des droits des utilisateurs de la plateforme

- **Gestion des utilisateurs** 
   - **Acteur(s)** : Administrateur
   - **Description** : L'objectif de cette fonctionnalité est de gérer l'ensemble des utilisateurs de la plateforme

### Gestion du Tableau de Bord

- **Créer un tableau de Bord**
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** : L'objectif de cette fonctionnalité est de créer un tableau de bord présentant les différents processus de l'organisation. 

- **Paramétrer un tableau de Bord** 
   - **Acteur(s)** : Administrateur, Agent DQP
   - **Description** : L'objectif de cette fonctionnalité est de paramétrer un tableau de bord


### Cas d'utilisation Commun

- **S'Authentifier** 
   - **Acteur(s)** : Tous les acteurs
   - **Description** : L'objectif de cette fonctionnalité est de permettre à un utilisateur de s'authentifier sur la plateforme à partir de son CUID et son Mot de Passe Windows. 

- **Se Déconnecter**
   - **Acteur(s)** : Tous les acteurs
   - **Description** : L'objectif de cette fonctionnalité est de permettre à un utilisateur de se déconnecter de la plateforme

## Diagramme de Cas d'utilisation

![Gestion Processus.png](/.attachments/Gestion%20Processus-4afbbe03-7ed2-44ec-8348-d1784bb16dee.png)
