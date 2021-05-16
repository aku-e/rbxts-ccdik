type ConstraintTypes = "BallSocketConstraint" | "Hinge";
type ConstraintsMap = Map<Motor6D, ConstraintInfo>;
type CCDIKController = {
	Constraints: ConstraintsMap | undefined;
	LerpMode: boolean;
	DebugMode: boolean;
	LerpAlpha: number;
	ConstantLerpSpeed: boolean;
	AngularSpeed: number;
	UseLastMotor: boolean;
	RaycastLengthDown: number;
	FootRaycastParams: RaycastParams;
	FootOrientationSystem: boolean;

	GetConstraints(): void;
	GetConstraintsFromMotor(Motor6D: Motor6D, constraintName: string): void;
	CCDIKIterateOnce(goalPosition: Vector3, tolerance: number | 1, step: number): void;
	CCDIKIterateUntil(
		goalPosition: Vector3,
		tolerance: number | undefined,
		maxBreakCount: number | undefined,
		step: number,
	): void;
	rotateJointFromTo(Motor6D: Motor6D, u: Vector3, v: Vector3, axis: Vector3): void;
	rotateJointFromToWithLerp(Motor6D: Motor6D, u: Vector3, v: Vector3, axis: Vector3, step: number): void;
	SetupFoot(attachmentNameTable: Array<string>, raycastParams: RaycastParams): void;
	SetupJoints(): void;
	RotateFromEffectorToGoal(Motor6D: Motor6D, goalPosition: Vector3, step: number): void;
	OrientFootMotorToFloor(Motor6D: Motor6D, step: number): void;
	RotateToHingeAxis(Motor6D: Motor6D, constraintInfo: ConstraintInfo): void;
	RotateToBallSocketConstraintAxis(Motor6D: Motor6D, constraintInfo: ConstraintInfo): void;
	InitDragDebug(): void;
	Destroy(): void;
};

interface CCDIKConstructor {
	new (Motor6DArray: Array<Motor6D>, ConstraintsDictionary?: ConstraintsMap): CCDIKController;

	ConstraintInfo: ConstraintInfo;
}

export interface ConstraintInfo {
	ConstraintType: ConstraintTypes;
}

export const CCDIKController: CCDIKConstructor;
