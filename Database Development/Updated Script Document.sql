-- MySQL Script generated by MySQL Workbench
-- Mon Sep 16 10:48:47 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ams_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ams_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ams_db` DEFAULT CHARACTER SET latin1 ;
USE `ams_db` ;

-- -----------------------------------------------------
-- Table `ams_db`.`tbl_customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ams_db`.`tbl_customer` (
  `customer_id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`customer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `ams_db`.`tbl_meter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ams_db`.`tbl_meter` (
  `meter_id` INT(11) NOT NULL AUTO_INCREMENT,
  `customer_id` INT(11) NULL DEFAULT NULL,
  `meter_type` ENUM('electricity', 'water') NOT NULL,
  `serial_number` VARCHAR(50) NOT NULL,
  `installation_date` DATE NOT NULL,
  `status` ENUM('active', 'inactive') NULL DEFAULT 'active',
  PRIMARY KEY (`meter_id`),
  UNIQUE INDEX `serial_number` (`serial_number` ASC) VISIBLE,
  INDEX `customer_id` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `meters_ibfk_1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `ams_db`.`tbl_customer` (`customer_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `ams_db`.`tbl_billing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ams_db`.`tbl_billing` (
  `bill_id` INT(11) NOT NULL AUTO_INCREMENT,
  `billing_period_start` DATE NOT NULL,
  `billing_period_end` DATE NOT NULL,
  `total_amount` DECIMAL(10,2) NOT NULL,
  `due_date` DATE NOT NULL,
  `status` ENUM('paid', 'unpaid') NULL DEFAULT 'unpaid',
  `tbl_Meter_meter_id` INT(11) NOT NULL,
  PRIMARY KEY (`bill_id`),
  INDEX `fk_tbl_Billing_tbl_Meter1_idx` (`tbl_Meter_meter_id` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_Billing_tbl_Meter1`
    FOREIGN KEY (`tbl_Meter_meter_id`)
    REFERENCES `ams_db`.`tbl_meter` (`meter_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `ams_db`.`tbl_payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ams_db`.`tbl_payment` (
  `payment_id` INT(11) NOT NULL AUTO_INCREMENT,
  `bill_id` INT(11) NULL DEFAULT NULL,
  `payment_date` DATETIME NOT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`payment_id`),
  INDEX `bill_id` (`bill_id` ASC) VISIBLE,
  CONSTRAINT `payments_ibfk_1`
    FOREIGN KEY (`bill_id`)
    REFERENCES `ams_db`.`tbl_billing` (`bill_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `ams_db`.`tbl_reading`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ams_db`.`tbl_reading` (
  `reading_id` INT(11) NOT NULL AUTO_INCREMENT,
  `meter_id` INT(11) NULL DEFAULT NULL,
  `reading_date` DATETIME NOT NULL,
  `value` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`reading_id`),
  INDEX `meter_id` (`meter_id` ASC) VISIBLE,
  CONSTRAINT `readings_ibfk_1`
    FOREIGN KEY (`meter_id`)
    REFERENCES `ams_db`.`tbl_meter` (`meter_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `ams_db`.`tbl_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ams_db`.`tbl_user` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `role` ENUM('Admin', 'Reader', 'Finance') NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
